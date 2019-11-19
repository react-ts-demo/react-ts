import * as React from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

/*
@params url 发送链接
@params method请求方法post/get
@params id 其他参数
@params 请求发送后回调函数
*/
interface UpProps {
  url: string;
  method?: string;
  id?: string;
  callBack: (res: any) => void;
}

export const Upload: React.FC<UpProps> = (props: UpProps) => {
  const { url, id, method = "post", callBack } = props;
  const [src, setSrc] = React.useState("" as string);
  const [fileForm, setFileForm] = React.useState("" as any);
  const [open, setOpen] = React.useState(false as boolean);
  const [imgDisplay, setImgDisplay] = React.useState("none" as string);

  const useStyle = makeStyles({
    root: {
      display: "flex"
    },
    img: {
      display: imgDisplay,
      height: "100px",
      width: "auto",
      marginLeft: "30px"
    },
    modal: {
      width: "500px",
      borderRadius: "5px",
      boxShadow: "5px"
    },
    close: {
      width: "100%",
      height: "50px",
      marginLeft: "470px",
      fontSize: "24px"
    },
    up: {
      fontSize: "24px",
      width: "100px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px dashed #dedede",
      marginLeft: "30px"
    },
    center: {
      display: "flex",
      alignItems: "center"
    },
    bottom: {
      width: "180px",
      marginLeft: "300px",
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "30px",
      marginTop: "30px"
    }
  });
  const classes = useStyle();
  //点击关闭
  const handleClose = () => {
    setOpen(false);
    setFileForm("");
  };
  //弹出对话框
  const handleOpen = () => {
    setOpen(true);
  };
  //当文件改变是控制图片显示隐藏
  React.useEffect(() => {
    fileForm === "" ? setImgDisplay("none") : setImgDisplay("inline-block");
  }, [fileForm]);
  //预览图片并保存文件
  const previewImg = () => {
    let form = new FormData();
    let input = document.createElement("input");
    let reads = new FileReader();
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = () => {
      console.log(input.files);
      let file = input.files![0];
      form.append("file", file);
      if (id) form.append("id", id);
      //保存文件
      setFileForm(file);

      reads.readAsDataURL(file);
      reads.onload = function(e) {
        setSrc(this.result as string);
      };
    };
  };
  //上传文件
  const uploadOnclick = () => {
    fetch(url, {
      method,
      // headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      // },
      body: fileForm
    })
      .then(response => response.json())
      .then(res => {
        //这个方法应该在使用时传递
        callBack(res);
      })
      .catch(function(error) {
        console.log("request failed: ", error);
      });
  };
  return (
    <>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          onClick={handleOpen}
        >
          Upload
        </Button>
      </div>
      {/* 展开模态框部分 */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <div className={classes.modal}>
          <div onClick={handleClose} className={classes.close}>
            x
          </div>
          <div className={classes.center}>
            <Button onClick={previewImg} className={classes.up}>
              +
            </Button>
            <img src={src} className={classes.img} id="img" alt="img"></img>
          </div>
          <div className={classes.bottom}>
            <Button variant="contained" color="primary" onClick={uploadOnclick}>
              上传
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
              取消
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};
