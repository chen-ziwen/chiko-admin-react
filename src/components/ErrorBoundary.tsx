import { Button, Typography } from 'antd';
import type { FallbackProps } from 'react-error-boundary';

import { localStg } from '@/utils/storage';

import { $t } from '../locales';

const isDev = import.meta.env.DEV;

const { Text, Title } = Typography;

const theme = localStg.get('themeColor') || '#646cff';
const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  // 可以在这里根据不同的业务逻辑处理错误或者上报给日志服务

  return (
    <div className="size-full min-h-520px flex-col-center gap-16px overflow-hidden">
      <div className="text-primary flex text-400px">
        <SvgIcon localIcon="error" />
      </div>
      {isDev ? <Text code>{error.message}</Text> : <Title level={3}>{$t('common.errorHint')}</Title>}
      <Button
        style={{ backgroundColor: theme }}
        type="primary"
        onClick={resetErrorBoundary}
      >
        {$t('common.tryAlign')}
      </Button>
    </div>
  );
};

export default ErrorPage;
