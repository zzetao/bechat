import React, {
    Dimensions,
    Platform
} from 'react-native';

export default {
	screen_height: Dimensions.get('window').width,
	screen_width: Dimensions.get('window').height,

	platform: Platform.OS,

}