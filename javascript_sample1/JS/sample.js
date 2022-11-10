function getElement() {
    const element = document.getElementsByTagName("h1");
    //　以下を追加
    element[0].innerText = "変更しました"
  };
  
  window.onload = getElement;