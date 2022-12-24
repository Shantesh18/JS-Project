const main=document.getElementById("main");
let textArea;
let addComment

function start(){

    textArea=document.createElement("textarea");
    textArea.style.color="red";
    addComment=document.createElement("button");
    addComment.innerText="ADD";
    main.appendChild(textArea);
    main.appendChild(addComment);
}

start();

addComment.addEventListener("click",()=>{
    if(textArea.value){
        let comment=document.querySelector("textarea").value;
        const ul=document.createElement("ul");
        const li=document.createElement("li");

        li.append(comment);
        replyLikeDeleteBtn(li);
        ul.append(li);
        
        main.appendChild(ul);
        textArea.value=null;
    } 
})

const replyLikeDeleteBtn=(li)=>{
   replyBtn(li);
   likeBtn(li);
   deleteBtn(li);
}
const replyBtn=(li)=>{
    const replyBtnElement=document.createElement("button");
    replyBtnElement.innerText="Reply";
    li.append(replyBtnElement);
    replyBtnElement.addEventListener('click',()=>{
        replyBox(li);
    })
}
const likeBtn=(li)=>{
    const likeBtn=document.createElement("button");
    likeBtn.innerText="Like 0";
    li.append(likeBtn);
    likeBtn.addEventListener('click',()=>{
        let count=Number(likeBtn.innerText.split(" ")[1]);
        count+=1;
        likeBtn.innerText=`Like ${count}`;
    })
}
const deleteBtn=(li)=>{
    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";
    li.append(deleteBtn);
    deleteBtn.addEventListener('click', ()=>{
        li.remove();
    })
}

const replyBox=(li)=>{

    const lineBreak=document.createElement("br");
        const commentReplyTextArea=document.createElement("textarea");
        const commentReplyAddBtn=document.createElement("button");
        commentReplyAddBtn.innerText="Add";
        li.append(lineBreak,commentReplyTextArea,commentReplyAddBtn);

        const newUl=document.createElement("ul");
        li.append(newUl);
        commentReplyAddBtn.addEventListener('click',()=>{
            if(commentReplyTextArea.value){
                addReplyComment(newUl,commentReplyTextArea);
                commentReplyTextArea.value=null;
            }
            
        })
}

const addReplyComment=(newUl,newComment)=>{
    if(newComment){
        const newLi=document.createElement("li");
        newLi.append(newComment.value,);
        replyLikeDeleteBtn(newLi);
        newUl.append(newLi);
    }
}
