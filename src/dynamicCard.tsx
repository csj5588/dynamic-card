import React, { ReactChild } from 'react';
import { Button, Modal, Icon, Card } from 'antd';
import './index.less';
import 'antd/dist/antd.css';

const prefix = 'DynamicCard';
const cx = (x: string) => `${prefix}-${x}`;
const { confirm } = Modal;

interface willAddInterFace {(key: number): void}
interface willCancelInterface {(key: number): void}
interface childrenInterface {(key: number): React.ReactNode}

type IPrps = {
  defaultNum?: number;
  willCancel?: willCancelInterface;
  willAdd?: willAddInterFace;
  cancelIcon?: ReactChild;
  children: childrenInterface,
  className?: string,
  addButtonClassName?: string,
};

type IState = {
  count: number;
  order: number[];
  defaultInitial: boolean;
  addLoading: boolean;
};

class DynamicCard extends React.Component<IPrps, IState> {
  state: IState = {
    count: 0,
    order: [0],
    defaultInitial: false,
    addLoading: false,
  };

  static getDerivedStateFromProps(props: IPrps, state: IState) {
    if (!state.defaultInitial && props.defaultNum) {
      return {
        ...state,
        order: Array.from({ length: props.defaultNum }, ((_, i) => i + 1)),
        count: props.defaultNum,
        defaultInitial: true,
      }
    }
    return state;
  }

  handleAdd = async () => {
    const { count } = this.state;
    const { willAdd } = this.props;

    const nextCount = count + 1;
    this.setState({ addLoading: true });
    
    if (willAdd) await willAdd(nextCount);
    const copy = [...this.state.order];
    copy.push(nextCount);
    this.setState({ order: copy, count: nextCount, addLoading: false });
  }

  handleDel = (key: number) => {

    const deleteByKey = async () => {
      const { willCancel } = this.props;
      willCancel && await willCancel(key);

      const copy = [...this.state.order];
      const nextOrder = copy.filter(x => x !== key);

      this.setState({ order: nextOrder });
    }

    confirm({
      title: '确认删除？',
      onOk: deleteByKey,
      okText: '确认',
      cancelText: '取消',
      onCancel: () => {
        console.log('cancel');
      },
    });
  }

  renderCancelIcon = () => {
    const { cancelIcon } = this.props;
    return cancelIcon ? cancelIcon : (
      <Icon
        type="minus-circle"
      />
    )
  }
  
  render() {
    const { order, addLoading } = this.state;
    const { children, className, addButtonClassName } = this.props;
    return (
      <div className={cx('root')}>
        <Button
          loading={addLoading}
          className={`add-button ${addButtonClassName}`}
          onClick={this.handleAdd}
        >
          Add
        </Button>
        {
          order.map((key: number) => {
            return (
              <Card
                key={`dynamicKey${key}`}
                className={`card ${className}`}
              >
                <div className="cancelBox" onClick={() => this.handleDel(key)}>
                  {this.renderCancelIcon()}
                </div>
                {children(key)}
              </Card>
            )
          })
        }
      </div>
    );
  }
}

export default DynamicCard;
