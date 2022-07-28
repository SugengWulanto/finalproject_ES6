let res;
      function uploadImage() {
        document.getElementById("upload").click();
      }
      async function klik(e) {
        res = await convertBase64(e.target.files[0]);
        const elemen = document.getElementById("canvas");
        elemen.setAttribute("src", res);
        elemen.style.display = "block ";
        document.getElementsByClassName("bi")[0].style.display = "block";
      }
      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
      function copyToClipboard() {
        navigator.clipboard.writeText(res);
        alert("sudah tersalin");
      }
      function allowDrop(e) {
        e.preventDefault();
      }
      async function drp(e) {
        e.preventDefault();
        e.stopPropagation();
        res = await convertBase64(e.dataTransfer.files[0]);
        const elemen = document.getElementById("canvas");
        elemen.setAttribute("src", res);
        elemen.style.display = "block ";
        document.getElementsByClassName("bi")[0].style.display = "block";
      }