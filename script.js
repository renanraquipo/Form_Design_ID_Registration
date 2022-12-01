function programDropdown(listindex) {
    switch(listindex){
        case "College of Criminal Justice Education" :
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Bachelor of Science in Criminology");
            document.getElementById("program").options[1].setAttribute("value", "Bachelor of Science in Criminology");
            document.getElementById("program").options[2] = new Option("Bachelor of Forensic Science");
            document.getElementById("program").options[2].setAttribute("value", "Bachelor of Forensic Science");
            document.getElementById("program").options[3] = new Option("Bachelor of Science in Industrial Security Management");
            document.getElementById("program").options[3].setAttribute("value", "Bachelor of Science in Industrial Security Management");
            document.getElementById("program").options[4] = new Option("Master of Science in Criminal Justice");
            document.getElementById("program").options[4].setAttribute("value", "Master of Science in Criminal Justice");
            document.getElementById("program").options[5] = new Option("Doctor of Philosophy in Criminal Justice");
            document.getElementById("program").options[5].setAttribute("value", "Doctor of Philosophy in Criminal Justice");

            break;
        case "College of Information Technology and Computer Science":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Associate in Computer Technology");
            document.getElementById("program").options[1].setAttribute("value", "Associate in Computer Technology");
            document.getElementById("program").options[2] = new Option("Bachelor of Science in Information Technology");
            document.getElementById("program").options[2].setAttribute("value", "Bachelor of Science in Information Technology");
            document.getElementById("program").options[3] = new Option("Bachelor of Science in Computer Science");
            document.getElementById("program").options[3].setAttribute("value", "Bachelor of Science in Computer Science");
            document.getElementById("program").options[4] = new Option("Bachelor of Science in Data Analytics");
            document.getElementById("program").options[4].setAttribute("value", "Bachelor of Science in Data Analytics");
            document.getElementById("program").options[5] = new Option("Master of Science in Computer Science");
            document.getElementById("program").options[5].setAttribute("value", "Master of Science in Computer Science");
            document.getElementById("program").options[6] = new Option("Master in Information Technology");
            document.getElementById("program").options[6].setAttribute("value", "Master in Information Technology");
            document.getElementById("program").options[7] = new Option("Doctor in Information Technology");
            document.getElementById("program").options[7].setAttribute("value", "Doctor in Information Technology");
            break;
        case "College of Teacher Education":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Bachelor of Early Childhood Education");
            document.getElementById("program").options[1].setAttribute("value", "Bachelor of Early Childhood Education ");
            document.getElementById("program").options[2] = new Option("Bachelor of Elementary Education");
            document.getElementById("program").options[2].setAttribute("value", "Bachelor of Elementary Education");
            document.getElementById("program").options[3] = new Option("Bachelor of Special Needs Education");
            document.getElementById("program").options[3].setAttribute("value", "Bachelor of Special Needs Education");
            document.getElementById("program").options[4] = new Option("Bachelor of Physical Education");
            document.getElementById("program").options[4].setAttribute("value", "Bachelor of Physical Education");
            document.getElementById("program").options[5] = new Option("Bachelor of Secondary Education");
            document.getElementById("program").options[5].setAttribute("value", "Bachelor of Secondary Education");
            document.getElementById("program").options[6] = new Option("Certificate for Professional Education Completers");
            document.getElementById("program").options[6].setAttribute("value", "Certificate for Professional Education Completers");
            document.getElementById("program").options[7] = new Option("Master of Education");
            document.getElementById("program").options[7].setAttribute("value", "Master of Education");
            document.getElementById("program").options[8] = new Option("Doctor of Philosophy in Education");
            document.getElementById("program").options[8].setAttribute("value", "Doctor of Philosophy in Education");
            break;
        case "College of Accountancy":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Bachelor of Science in Accountancy");
            document.getElementById("program").options[1].setAttribute("value", "Bachelor of Science in Accountancy");
            document.getElementById("program").options[2] = new Option("Bachelor of Science in Management Accounting");
            document.getElementById("program").options[2].setAttribute("value", "Bachelor of Science in Management Accounting");
            document.getElementById("program").options[3] = new Option("Bachelor of Science in Accounting Information System");
            document.getElementById("program").options[3].setAttribute("value", "Bachelor of Science in Accounting Information System");
            document.getElementById("program").options[4] = new Option("Bachelor of Science in Forensic Accounting");
            document.getElementById("program").options[4].setAttribute("value", "Bachelor of Science in Forensic Accounting");
            document.getElementById("program").options[5] = new Option("Bachelor of Science in Internal Auditing");
            document.getElementById("program").options[5].setAttribute("value", "Bachelor of Science in Internal Auditing");
            break;
        case "College of Arts and Sciences":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Bachelor of Arts in English Language Studies");
            document.getElementById("program").options[1].setAttribute("value", "Bachelor of Arts in English Language Studies");
            document.getElementById("program").options[2] = new Option("Bachelor of Arts in Communication");
            document.getElementById("program").options[2].setAttribute("value", "Bachelor of Arts in Communication");
            document.getElementById("program").options[3] = new Option("Bachelor of Arts in Political Science");
            document.getElementById("program").options[3].setAttribute("value", "Bachelor of Arts in Political Science");
            document.getElementById("program").options[4] = new Option("Bachelor of Arts in Behavioral Science");
            document.getElementById("program").options[4].setAttribute("value", "Bachelor of Arts in Behavioral Science");
            document.getElementById("program").options[5] = new Option("Bachelor of Science in Psychology");
            document.getElementById("program").options[5].setAttribute("value", "Bachelor of Science in Psychology");
            document.getElementById("program").options[6] = new Option("Bachelor of Science in Biology");
            document.getElementById("program").options[6].setAttribute("value", "Bachelor of Science in Biology");
            document.getElementById("program").options[7] = new Option("Master of Arts Major in English as a Second Language");
            document.getElementById("program").options[7].setAttribute("value", "Master of Arts Major in English as a Second Language");
            document.getElementById("program").options[8] = new Option("Master of Arts in Political Science");
            document.getElementById("program").options[8].setAttribute("value", "Master of Arts in Political Science");
            document.getElementById("program").options[9] = new Option("Master in English Language Studies");
            document.getElementById("program").options[9].setAttribute("value", "Master in English Language Studies");
            document.getElementById("program").options[10] = new Option("Master of Science in Guidance and Counseling");
            document.getElementById("program").options[10].setAttribute("value", "Master of Science in Guidance and Counseling");
            document.getElementById("program").options[11] = new Option("Master of Science in Psychology");
            document.getElementById("program").options[11].setAttribute("value", "Master of Science in Psychology");
            document.getElementById("program").options[12] = new Option("Doctor of Philosophy in English Language Studies");
            document.getElementById("program").options[12].setAttribute("value", "Doctor of Philosophy in English Language Studies");
            break;
        case "College of Business Administration":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Bachelor of Science in Business Administration");
            document.getElementById("program").options[1].setAttribute("value", "Bachelor of Science in Business Administration");
            document.getElementById("program").options[2] = new Option("Bachelor of Science in Entrepreneurship");
            document.getElementById("program").options[2].setAttribute("value", "Bachelor of Science in Entrepreneurship");
            document.getElementById("program").options[3] = new Option("Master in Business Administration");
            document.getElementById("program").options[3].setAttribute("value", "Master in Business Administration");
            document.getElementById("program").options[4] = new Option("Master in Development Management");
            document.getElementById("program").options[4].setAttribute("value", "Master in Development Management");
            document.getElementById("program").options[5] = new Option("Doctor of Philosophy in Management");
            document.getElementById("program").options[5].setAttribute("value", "Doctor of Philosophy in Management");
            break;
        case "College of Engineering and Architecture":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Bachelor in Fine Arts");
            document.getElementById("program").options[1].setAttribute("value", "Bachelor in Fine Arts");
            document.getElementById("program").options[2] = new Option("Bachelor of Science in Architecture");
            document.getElementById("program").options[2].setAttribute("value", "Bachelor of Science in Architecture");
            document.getElementById("program").options[3] = new Option("Bachelor of Science in Civil Engineering");
            document.getElementById("program").options[3].setAttribute("value", "Bachelor of Science in Civil Engineering");
            document.getElementById("program").options[4] = new Option("Bachelor of Science in Computer Engineering");
            document.getElementById("program").options[4].setAttribute("value", "Bachelor of Science in Computer Engineering");
            document.getElementById("program").options[5] = new Option("Bachelor of Science in Electronics Engineering");
            document.getElementById("program").options[5].setAttribute("value", "Bachelor of Science in Electronics Engineering");
            document.getElementById("program").options[6] = new Option("Bachelor of Science in Environmental and Sanitary Engineering");
            document.getElementById("program").options[6].setAttribute("value", "Bachelor of Science in Environmental and Sanitary Engineering");
            document.getElementById("program").options[7] = new Option("Bachelor of Science in Environmental Planning");
            document.getElementById("program").options[7].setAttribute("value", "Bachelor of Science in Environmental Planning");
            document.getElementById("program").options[8] = new Option("Bachelor of Science in Mechatronics Engineering Major in Robotics");
            document.getElementById("program").options[8].setAttribute("value", "Bachelor of Science in Mechatronics Engineering Major in Robotics");
            document.getElementById("program").options[9] = new Option("Master of Science in Architecture");
            document.getElementById("program").options[9].setAttribute("value", "Master of Science in Architecture");
            document.getElementById("program").options[10] = new Option("Master of Science in Civil Engineering");
            document.getElementById("program").options[10].setAttribute("value", "Master of Science in Civil Engineering");
            break;
        case "College of Hospitality and Management":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Bachelor of Science in Hospitality Management");
            document.getElementById("program").options[1].setAttribute("value", "Bachelor of Science in Hospitality Management");
            document.getElementById("program").options[2] = new Option("Bachelor of Science in Tourism Management");
            document.getElementById("program").options[2].setAttribute("value", "Bachelor of Science in Tourism Management");
            break;
        case "College of Nursing":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Bachelor of Science in Nursing");
            document.getElementById("program").options[1].setAttribute("value", "Bachelor of Science in Nursing");
            break;
        case "College of Law":
            document.querySelector("#program").innerHTML = '';
            document.getElementById("program").options[0] = new Option("Select a program");
            document.getElementById("program").options[1] = new Option("Juris Doctor");
            document.getElementById("program").options[1].setAttribute("value", "Juris Doctor");
            break;
        
    }
    return true;