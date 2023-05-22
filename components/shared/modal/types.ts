import { ViewProps } from 'react-native';

export interface ModalComponentProps extends ViewProps {
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
}
