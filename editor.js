
document.getElementById('imgUpload').addEventListener('change',e=>{
const file=e.target.files[0];
if(!file)return;
const r=new FileReader();
r.onload=x=>document.getElementById('foto').src=x.target.result;
r.readAsDataURL(file);
});
