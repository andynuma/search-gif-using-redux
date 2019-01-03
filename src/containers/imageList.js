import ImageList from "../components/imageList";
import { connect } from "react-redux";

//  components/urlListの引数であるurlListをstateとして持たせる
// stateの中のimageUrlsをurlListと結びつける
const mapStateToProps = state => {
  return {
    urlList: state.imageUrls
  };
};

export default connect(
  mapStateToProps,
  null
)(ImageList);
