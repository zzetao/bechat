let msgBox = {
  container: {
    flexDirection: 'row-reverse',
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    width: 60,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 5
  },
  messageWrap: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10
  },
  messageContent: {
    flexWrap: 'wrap',
    backgroundColor: '#eee',
    borderRadius: 3,
    marginLeft: 45,
  },
  messageText: {
    borderRadius: 3,
    padding: 10,
  },
  rightMessageContent: {
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    backgroundColor: '#eee',
    borderRadius: 3,
    marginLeft: 45,
  }
}


let wrapper = {
	wrap: {
		paddingTop: 70,
	},
	container: {
		// flex: 1
	},
	inputBox: {
		// height: 40
	}
}



export default {
	msgBox,
	wrapper
}