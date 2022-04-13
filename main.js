function CalculateArea(){
    var Radius = document.form1.Radius.value;
    if (Radius !== "") {
        const ratio = Math.PI;
        const area = ratio * Radius * Radius;
        const ccf = Radius * 2 * ratio;
        const dia = Radius * 2;
        document.write("<div class='myDiv'><p class='output'>The area of the circle is " + area + "<br/><br/>The circumference of the circle is " + ccf + "<br/><br/>The diameter of the circle is " + dia + "<br/><br/>The ratio of the circle is " + ratio + "</p>")
        document.write("<h3 class='nameSec'>Edward Joseph Caacbay <br/> Grade 12 Chronus</h3></div>");

        document.write("<a href='index.html'>back</a>");
    } else {
        const error = document.querySelector(".error");
        error.innerHTML = "<h4 class='msg'>Please Input a Number</h4>";
        const msg = document.querySelector(".msg");

        msg.style.color = "red";
        
        setTimeout(() => msg.remove(), 2000);
    }
}