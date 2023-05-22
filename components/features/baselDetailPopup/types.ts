import { ViewProps } from 'react-native';

export interface BaselDetailPopupProps extends ViewProps {
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
}
