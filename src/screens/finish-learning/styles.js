import { StyleSheet, Dimensions, Platform } from 'react-native';
import { getStatusBarHeight, ifIphoneX } from 'app-common';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const isIos = Platform.OS === 'ios';
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    zIndex: 1,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    marginTop: 20,
    // paddingHorizontal: 16,
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  viewInput: {
    borderRadius: 12,
    // width: deviceWidth - 32,
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    marginRight: 8,
  },
  inputSearch: {
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 10,
    lineHeight: 15,
    color: '#000',
  },
  txtPhone: {
    marginLeft: 14,
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
  },
  iconMenu: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    tintColor: '#000',
  },
  iconBack: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: '#000',
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  imgBanner: {
    width: (276 / 375) * deviceWidth,
    height: (209 / 375) * deviceWidth,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
  },

  btn: {
    flexDirection: 'row',
    position: 'absolute',
    ...ifIphoneX(
      {
        bottom: 50,
        right: 16,
      },
      {
        bottom: 16,
        right: 16,
      }
    ),

    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginRight: 9,
  },
  // txtContent: {
  //   fontFamily: 'Poppins',
  //   fontSize: 14,
  //   lineHeight: 21,
  //   color: '#8D8D8D',
  //   marginTop: 6,
  // },

  childTitle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    marginTop: 34,
  },
  viewUpdateRole: {
    zIndex: 1000,
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(1,1,1,0.5)',
    width: deviceWidth,
    height: deviceHeight,
  },

  txtTime: {
    fontWeight: '500',
    fontFamily: 'Poppins',
    fontSize: 13,
    lineHeight: 20,
    color: '#FF2E2E',
    marginLeft: 9,
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 33,
  },
  banner: {
    width: deviceWidth - 32,
    height: (225 / 375) * deviceWidth,
    marginTop: 20,
  },

  txtContent: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 13,
    lineHeight: 20,
    color: '#000',
    fontWeight: '300',
    marginTop: 20,
  },
  viewModalMenu: {
    width: (333 / 375) * deviceWidth,
    height: deviceHeight,
    backgroundColor: '#fff',
    borderColor: '#FBC815',
    borderRightWidth: 3,
  },
  viewHeaderModalMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    marginTop: 25,
    marginLeft: 16,
  },
  btnCloseMenu: {
    backgroundColor: '#FBC815',
    width: 47,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  line: {
    width: (333 / 375) * deviceWidth - 32,
    marginBottom: 30,
    marginTop: 22,
    backgroundColor: '#F0F0F0',
    height: 1,
    alignSelf: 'center',
  },
  contentMenu: {
    marginHorizontal: 16,
  },
  txtSubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
    fontWeight: '500',
    marginLeft: 10,
  },
  txtOverview: {
    marginTop: 13,
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 13,
    lineHeight: 20,
    color: '#000',
    fontWeight: '300',
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalHours: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 10,
    lineHeight: 20,
    color: '#8F8F8F',
    fontWeight: '300',
  },
  txtItemLession: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 12,
    lineHeight: 20,
    color: '#4E4E4E',
    fontWeight: '300',
    marginLeft: 10,
  },

  btnFinish: {
    backgroundColor: '#36CE61',
    borderRadius: 6,
    width: 80,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFinish: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#fff',
    fontWeight: '500',
  },
  btnPage: {
    width: 25,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    marginHorizontal: 3,
  },
  txtPage: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    lineHeight: 20,
    color: '#000',
    fontWeight: '500',
  },
  viewPage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 23,
  },
  flatPage: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 40,
  },
  flatPageContainer: {
    // width: deviceWidth,
  },
  viewQuestion: {
    marginTop: 23,
  },
  itemQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  txtTitleQuestion: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    lineHeight: 20,
    color: '#000',
    fontWeight: '500',
  },
  txtItemQuestion: {
    fontFamily: 'Poppins',
    fontSize: 13,
    lineHeight: 19,
    color: '#878787',
    marginLeft: 9,
  },
  viewQuestion1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  itemQuestion1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  txtTitleQuestion1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    lineHeight: 20,
    color: '#000',
    fontWeight: '500',
  },
  txtItemQuestion1: {
    fontFamily: 'Poppins',
    fontSize: 13,
    lineHeight: 19,
    color: '#878787',
    marginLeft: 9,
  },
  viewBtnBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 36,
  },
  btnSubmit: {
    height: 40,
    flex: 1,
    backgroundColor: '#FBC815',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  txtBtnSubmit: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
    fontWeight: '500',
  },
  btnNext: {
    height: 40,
    width: 150,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignSelf: 'center',
    marginTop: 50,
  },
  btnHint: {
    height: 40,
    width: 40,
    backgroundColor: '#626FE2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  overview: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 24,
    backgroundColor: '#fff',
    marginTop: 25,
    // marginHorizontal: 16,
    width: deviceWidth - 32,
    height: (207 / 375) * deviceWidth,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCircle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    // lineHeight: 30,
    color: '#000',
    fontWeight: '500',
  },
  txtLable: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    lineHeight: 30,
    color: '#000',
    fontWeight: '500',
  },
  txtResult: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    // lineHeight: 30,
    color: '#F46647',
    fontWeight: '500',
  },
  txt1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 24,
    color: '#D03838',
    fontWeight: '500',
    marginBottom: 20,
  },
  txt2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    lineHeight: 19,
    color: '#000',
    fontWeight: '600',
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnRetoke: {
    width: 150,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F46647',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnReview: {
    width: 150,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#FBC815',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtRetoke: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#fff',
    fontWeight: '500',
  },
  txtReview: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#000',
    fontWeight: '500',
  },
});