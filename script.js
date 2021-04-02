 // 1. create a request variable
        var request = new XMLHttpRequest();
        // 2. create a connection
        request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
        // 3. send the connection
        request.send();
        // 4. register a event listener. once the data is ready

        var myData;

        request.onload = function () {

            myData = JSON.parse(this.response);

            console.log(myData[0]);
            var myDataLength = myData.length;

            console.log(myDataLength);

            var output1 = '';


            for (let i= 0;i< 10;i++){
                output1 += '<tr><td>'+myData[i].id+'</td><td>'+myData[i].name+'</td><td>'+myData[i].email+'</td></tr>';
            }

            document.getElementById('myInfo').innerHTML = output1;
          

        }
 
        function foo(pg) {

            let output1 ='';

            for (let i=((pg-1)*10);i<(pg*10);i++){
                output1 += '<tr><td>'+myData[i].id+'</td><td>'+myData[i].name+'</td><td>'+myData[i].email+'</td></tr>';
            }
            console.log(output1);
            document.getElementById('myInfo').innerHTML = output1;


        }