import { IAnalyticsState } from '../analytics/reducer';
import { IAuthenticationState } from '../authentication/reducer';
import { IAVModerationState } from '../av-moderation/reducer';
import { IAppState } from '../base/app/reducer';
import { IAudioOnlyState } from '../base/audio-only/reducer';
import { IConferenceState } from '../base/conference/reducer';
import { IConfig } from '../base/config/configType';
import { IConnectionState } from '../base/connection/reducer';
import { IDevicesState } from '../base/devices/reducer';
import { IDialogState } from '../base/dialog/reducer';

export interface IStore {
    getState: Function,
    dispatch: Function
}

export interface IState {
    'features/analytics': IAnalyticsState,
    'features/authentication': IAuthenticationState,
    'features/av-moderation': IAVModerationState,
    'features/base/app': IAppState,
    'features/base/audio-only': IAudioOnlyState,
    'features/base/conference': IConferenceState,
    'features/base/config': IConfig,
    'features/base/connection': IConnectionState,
    'features/base/devices': IDevicesState,
    'features/base/dialog': IDialogState
}
