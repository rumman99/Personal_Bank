    // Login Button Event Handler//
        let button= document.getElementsByClassName('button')[0];
        button.addEventListener('click', function(){
            document.getElementsByClassName('login_out')[0].style.display='None';
            document.getElementById('transaction').style.display='block';
        });

    // Deposit Button
        let depositBtn= document.getElementsByClassName('deposit_btn')[0];
        depositBtn.addEventListener('click', function d(){
            // adding input amount to Deposit//
            let convertDepositText= convertValueFloat('depositId');
            let totalDeposit=ConvertToFloat("depositBalance")+convertDepositText;
            document.getElementById("depositBalance").innerText=totalDeposit;

            // reset input value
            document.getElementById("depositId").value='';

            // adding inputDeposit amount to balance//
            let totalBalance=ConvertToFloat('balanceId')+convertDepositText;
            document.getElementById('balanceId').innerText=totalBalance;
        });

    
    

    // Withdraw Button//
    document.getElementsByClassName('withdraw_btn')[0].addEventListener('click', withdrawButtonInput);
    
    // adding input amount to withdraw
    function withdrawButtonInput(){
            let convertWithdrawValue= convertValueFloat('withdrawInput');
            let totalWithdraw= ConvertToFloat('withdrawId')+convertWithdrawValue;
            document.getElementById('withdrawId').innerText=totalWithdraw;

            // Clearing Input Withdraw
            document.getElementById('withdrawInput').value='';

            // Adding InputWithdraw to Balance;
            let totalBalanceAfterWithdraw= ConvertToFloat('balanceId')-convertWithdrawValue;
            document.getElementById('balanceId').innerText=totalBalanceAfterWithdraw;
    };

        //function for converting String to float//
        function ConvertToFloat(input){
                let number= document.getElementById(input).innerText;
                let convert= parseFloat(number);
                return convert;
            };

        // function for converting Value to float//
        function convertValueFloat(input1){
            let number=document.getElementById(input1).value;
            let convert=parseFloat(number);
            return convert;
        }