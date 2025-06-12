import { App } from 'antd';
import type { PropsWithChildren } from 'react';
import "@ant-design/v5-patch-for-react-19";

// 挂载一些全局方法
function ContextHolder() {
    const { message, modal, notification } = App.useApp(); // 必须包裹在 App 组件中才能使用该方法
    window.$message = message;
    window.$modal = modal;
    window.$notification = notification;
    return null;
}

// App 组件通过 Context 提供上下文方法调用
const AppProvider = ({ children }: PropsWithChildren) => {
    return (
        <App className='h-full'>
            <ContextHolder />
            {children}
        </App>
    );
};

export default AppProvider;