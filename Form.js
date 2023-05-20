import { useState } from "react";
import './form.css';
var Form=()=>
{
    var[a,SetA]=useState(undefined)
    var[b,SetB]=useState(undefined)
    var[c,SetC]=useState(undefined)
    var[d,SetD]=useState(undefined)
    var[f,SetF]=useState(undefined)
    var[g,SetG]=useState(undefined)
    var[h,SetH]=useState(undefined)
    var[i,SetI]=useState(undefined)
    var[j,SetJ]=useState(undefined)
    var[k,SetK]=useState(undefined)
    var[l,SetL]=useState(undefined)
    var[m1,SetM1]=useState(undefined)
    var[m2,SetM2]=useState(undefined)
    var[m3,SetM3]=useState(undefined)
    var[n,SetN]=useState(undefined)
    var[m4,SetM4]=useState(undefined)
    var[q,SetQ]=useState(undefined)
    var[s,SetS]=useState(undefined)
    var[c1,SetC1]=useState(undefined)
    var[p1,SetP1]=useState(undefined)
    var[p2,SetP2]=useState(undefined)


    var[res,SetRes]=useState(undefined)
    var[res1,SetRes1]=useState(undefined)
    var[res2,SetRes2]=useState(undefined)
    var[res3,SetRes3]=useState(undefined)
    var[res4,SetRes4]=useState(undefined)
    var[res5,SetRes5]=useState(undefined)
    var[res6,SetRes6]=useState(undefined)
    var[res7,SetRes7]=useState(undefined)
    var[res8,setRes8]=useState(undefined)
    var[res9,setRes9]=useState(undefined)
    var[res10,setRes10]=useState(undefined)
    var[res11,setRes11]=useState(undefined)
    var[res12,setRes12]=useState(undefined)
    var[res13,setRes13]=useState(undefined)
    var[res14,setRes14]=useState(undefined)
    var[res15,setRes15]=useState(undefined)
    var[res16,setRes16]=useState(undefined)
    var[res17,setRes17]=useState(undefined)
    var[res18,setRes18]=useState(undefined)

    function SetP(e)
    {
        var item=""
        for(var i=0;i<e.target.length;i++)
        {
            if(e.target.options[i].selected)
            {
                item=item+e.target.options[i].value
            }
        }
        SetP1(item)
    }


    function SetR(e)
    {
        var item1=""
        for(var i=0;i<e.target.length;i++)
        {
            if(e.target.options[i].selected)
            {
                item1=item1+e.target.options[i].value
            }
        }
        SetP2(item1)
    }

    var displayCourse=(e)=>{
        SetRes("First Name:- "+a)
        SetRes1("Last Name:- "+b)
        SetRes2("Date of Birth:- "+c)
        SetRes3("Email-ID:- "+d)
        SetRes4("Address:- "+f)
        SetRes5(g)
        SetRes6("Pin Code:-"+h)
        SetRes7("Mobile Number:- "+i)
        setRes8("Gender:- "+j)
        setRes9("Category:- "+k)
        setRes10("Marital Status:- "+l)
        setRes12("Father's Name:- "+n)


        var data1="";
        var data2="";
        var data3="";
        if(m1===true)
        {
            data1="English";
        }
        else
        {
            data1=" ";
        }
        if(m2===true)
        {
            data2="Hindi";
        }
        else
        {
            data2="";
        }
        if(m3===true)
        {
            data3="Marathi";
        }
        else
        {
            data3="";
        }
        setRes11("Languages Known:- "+data1+" "+data2+" "+data3)


        var data4=""
        if(m4==true)
        {
            data4="Success!!!Your Form is Submitted!!!"
        }
        else
        {
            data4="";
        }
        setRes13(data4)
        setRes14("Educational Qualifications:- "+q)
        setRes15("State:- "+s)
        setRes16("City:- "+c1)
        setRes17("Exam Centre Preferences(State):- "+p1)
        setRes18("Exam Centre Preferences(City):-"+p2)
        e.preventDefault()
    }
    return(<div>
        <div className="r-form">

        <form onSubmit={displayCourse}>

            <div className="label">

            <label>Registration Form</label><br></br>
            </div>

            <table>
           <tr><th>FIRST NAME:-</th><td>
            <input type="text"placeholder="Enter First Name"onChange={(e)=>SetA(e.target.value)}/></td></tr><br></br>


            <tr><th>LAST NAME:- </th><td>
            <input type="text"placeholder="Enter Last Name"onChange={(e)=>SetB(e.target.value)}/></td></tr><br></br>


            <tr><th>FATHER'S NAME:- </th><td>
            <input type="text"placeholder="Enter Father's Name"onChange={(e)=>SetN(e.target.value)}/></td></tr><br></br>


          <tr><th>GENDER:- </th><td>
            <input type="radio"name="gender"value="Male"onChange={(e)=>SetJ(e.target.value)}/>Male


            <input type="radio"name="gender"value="Female"onChange={(e)=>SetJ(e.target.value)}/>Female


            <input type="radio"name="gender"value="Others"onChange={(e)=>SetJ(e.target.value)}/>Others</td></tr><br></br>


            <tr><th>MARITAL STATUS</th>
            <td><input type="radio"name="marital"value="Married"onChange={(e)=>SetL(e.target.value)}/>Married


            <input type="radio"name="marital"value="Unmarried"onChange={(e)=>SetL(e.target.value)}/>Unmarried


            <input type="radio"name="marital"value="Divorced"onChange={(e)=>SetL(e.target.value)}/>Divorced</td></tr><br></br>


            <tr><th>CATEGORY</th><td>
                <input type="radio"name="category"value="General"onChange={(e)=>SetK(e.target.value)}/>General


            <input type="radio"name="category"value="OBC"onChange={(e)=>SetK(e.target.value)}/>OBC
            

            <input type="radio"name="category"value="SC"onChange={(e)=>SetK(e.target.value)}/>SC


            <input type="radio"name="category"value="ST"onChange={(e)=>SetK(e.target.value)}/>ST</td></tr><br></br>       


            <tr><th>DATE OF BIRTH:-</th><td>
                <input type="date"onChange={(e)=>SetC(e.target.value)}/></td></tr><br></br>


            <tr><th>MOBILE NUMBER:-</th><td>
                <input type="number"placeholder="Enter Mobile Number"onChange={(e)=>SetI(e.target.value)}/></td></tr><br></br>


            <tr><th>EMAIL-ID:- </th><td><input type="email"placeholder="Enter Email-id"onChange={(e)=>SetD(e.target.value)}/></td></tr><br></br>


            <tr><th>ENTER ADDRESS:-</th><td>
                <input type="text"placeholder="Address line1"onChange={(e)=>SetF(e.target.value)}/><br></br>


            <input type="text"placeholder="Address line2"onChange={(e)=>SetG(e.target.value)}/></td></tr><br></br>


            <tr><th>PIN CODE:- </th><td>
                <input type="number"placeholder="Enter PinCode"onChange={(e)=>SetH(e.target.value)}/></td></tr><br></br>


            <tr><th>SELECT STATE:- </th><td>
            <select onChange={(e)=>SetS(e.target.value)}>
            <option value="">Select Your State</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            </select></td></tr><br></br>


            <tr><th>SELECT CITY:- </th><td>
            <select onChange={(e)=>SetC1(e.target.value)}>
            <option value="">Select Your City</option>
            <option value="Indore">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ajmer">Ajmer</option>
            <option value="Raipur">Raipur</option>
            <option value="Bilaspur">Bilaspur</option>
            </select></td></tr><br></br>


           <tr><th>LANGUAGES KNOWN:-</th><td>
            <input type="checkbox"name="language"value="English"onChange={(e)=>SetM1(e.target.checked)}/>English


            <input type="checkbox"name="language"value="Hindi"onChange={(e)=>SetM2(e.target.checked)}/>Hindi


            <input type="checkbox"name="language"value="Marathi"onChange={(e)=>SetM3(e.target.checked)}/>Marathi</td></tr><br></br>


            <tr><th>EDUCATIONAL QUALIFICATIONS:- </th><td>
                <select onChange={(e)=>SetQ(e.target.value)}>
                <option value="">Select Qualification</option>
                <option value="High School">High School</option>
                <option value="Higher Secondary">Higher Secondary</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
            </select></td></tr><br></br>


            <tr><th>EXAM CENTRE PREFERENCES:-</th><td><select onChange={SetP} multiple>
            <option value="">Select Your State</option>
            <option value="Madhya Pradesh ">Madhya Pradesh</option>
            <option value="Maharashtra ">Maharashtra</option>
            <option value="Rajasthan ">Rajasthan</option>
            <option value="Chhattisgarh ">Chhattisgarh</option>
            </select></td></tr><br></br><br></br>


            <tr><th>EXAM CENTRE PREFERENCES:- </th>
            <td><select onChange={SetR}multiple>
            <option value="">Select Your City</option>
            <option value="Indore ">Indore</option>
            <option value="Bhopal ">Bhopal</option>
            <option value="Pune ">Pune</option>
            <option value="Mumbai ">Mumbai</option>
            <option value="Jaipur ">Jaipur</option>
            <option value="Ajmer ">Ajmer</option>
            <option value="Raipur ">Raipur</option>
            <option value="Bilaspur ">Bilaspur</option>
            </select></td></tr><br></br>


            <tr><td><input type="checkbox"name="tick"value=""onChange={(e)=>SetM4(e.target.checked)}/>I hereby declare that the above information is correct.<br></br>


            <input type="submit"name="btnsubmit"value="Submit"/></td></tr>
            </table>
        </form>
        </div>
        <hr></hr>


        <div className="result">
        {res}<br></br>
        {res1}<br></br>
        {res12}<br></br>
        {res8}<br></br>
        {res10}<br></br>
        {res9}<br></br>
        {res2}<br></br>
        {res7}<br></br>
        {res3}<br></br>
        {res4}&nbsp;
        {res5}<br></br>
        {res6}<br></br>
        {res15}<br></br>
        {res16}<br></br>
        {res11}<br></br>
        {res14}<br></br>
        {res17}<br></br>
        {res18}<br></br>    
        {res13}<br></br>
        </div>
    </div>)
}
export default Form;