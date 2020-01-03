var editName = function(key){
    var changed = prompt("바꿀 이름을 입력하세요");
    if(changed===''){
        alert('글자를 입력해주세요');
    }else{
        axios.put(`/users/${key}`,{
            "name": changed
        })
            .then((res)=>{
                console.log(res);
                if(res.status === 200){
                    getUser();
                }else{
                    alert("요청이 실패했습니다.");
                }
            })
            .catch((err)=>{
                console.error(err);
            })
    }
}
var removeName = function(key){
    var result = confirm("삭제하시겠습니까?");
    if(result === true){
        axios.delete(`/users/${key}`, {
            "name" : name
        })
        .then((res)=>{
            if(res.status === 200){
                getUser();
            }else{
                alert("요청이 실패했습니다");
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }
}

var getUser = function (){
    axios.get('/users')
        .then((res)=>{
            var { data } = res;
            var list = document.getElementById('list');
            list.innerHTML = "";
            Object.keys(data).map((key)=>{
                console.log(key);
                var userDiv = document.createElement('div');
                var span = document.createElement('span');
                span.innerHTML = data[key];
                var edit = document.createElement('button');
                edit.innerHTML = "수정";
                var remove = document.createElement('button');
                remove.innerHTML = "삭제";
                userDiv.appendChild(span);
                userDiv.appendChild(edit);
                userDiv.appendChild(remove);
                list.appendChild(userDiv);
                
                edit.addEventListener('click', editName.bind(null, key));
                remove.addEventListener('click',removeName.bind(null, key));
            })
            })
        .catch((err)=>{
            console.log(err);
        })
}
// function getUser() { // 로딩 시 사용자 가져오는 함수
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         console.log(JSON.parse(xhr.response));
//         var users = JSON.parse(xhr.responseText);
        
        
//       } else {
//         console.error(xhr.responseText);
//       }
//     };
//     xhr.open('GET', '/users');
//     xhr.send();
//   }

window.onload = getUser;

document.querySelector('#form').onsubmit = (e)=>{
    e.preventDefault();
    // console.log(e.target.value);
    var name = document.querySelector('#username').value;
    // console.log(name);
    if(name === ''){
        alert('이름을 입력해주세요');
    }else{
        axios.post('/users',{
            "name" : name
        })
        .then((res)=>{
            console.log(res);
            getUser();
            
        })
        .catch((err)=>{
            console.log(err);
        })
        document.querySelector('#username').value = '';    
    }
    
};