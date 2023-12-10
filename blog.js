let alertShow = false;
setInterval(() => {
    document.title = 
    alertShow ? "Bem vindo a nossa página"
                : "TecBlog e Você, um mundo de tecnologia";

    alertShow = !alertShow;

}, 1000);