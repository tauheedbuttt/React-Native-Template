import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export const push = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}
export const goBack = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export const reset = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name, params}],
    });
  }
}

