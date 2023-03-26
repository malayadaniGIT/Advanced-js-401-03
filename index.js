var img=[];
img[0]="https://blog.geekster.in/wp-content/uploads/2021/09/Most-popular-full-stack-featured-image.png";
img[1]="https://blog.geekster.in/wp-content/uploads/2021/08/Top-companies-you-can-work-at-after-completing-Full-Stack-Development-course-image.png";
img[2]="https://blog.geekster.in/wp-content/uploads/2022/06/React-projects-featured-image.png";
i=0;
var imgage=document.getElementById("pic");
setInterval("next()", 10000);
function pre() {
    i--;
    if(i==-1){
        i=2;
    }
    imgage.src=img[i];
}
function next() {
    i++;
    if(i==3){
        i=0;
    }
    imgage.src=img[i];
}
