function fn() {
    let sec = document.getElementsByClassName('sec')
    sec[0].style.display = 'block';
  }

  function js() {
    let sec = document.getElementsByClassName('sec')
    sec[1].style.display = 'block';
  }

  function budget() {

    let budget = document.getElementById('budget').value;

    let td1 = document.getElementById('td1')
    // let td3 = document.getElementById('td3')

    // td3.textContent = budget;

    td1.textContent = budget;


    let emptyInputs = document.getElementsByClassName('td2');
for (let i = 0; i < emptyInputs.length; i++) {
  emptyInputs[i].textContent = '';
}

  }


  function dom() {
    let ul = document.getElementById('ul');
    let date = document.getElementById('date').value;
    let category = document.getElementById('category').value;
    let desc = document.getElementById('desc').value;
    let amount = document.getElementById('amount').value;
    let payment = document.getElementById('payment').value;
    let budget = document.getElementById('td1').textContent;

    let combine = date + category + amount + desc + payment;

    if (combine !== '') {
      if (parseFloat(amount) > parseFloat(budget)) {
        alert("You don't have sufficient budget!");
        return;
      }

      let li = document.createElement('li');
      ul.appendChild(li);

      let del = document.createElement('button');
      del.textContent = 'delete';
      li.appendChild(del);
      del.className = 'delete';

      del.addEventListener('click', function () {
        del.parentNode.remove();
      });

      li.classList.add('custom-li');

      let spanDate = document.createElement('span');
      spanDate.textContent = date;
      spanDate.classList.add('date');
      li.appendChild(spanDate);

      let spanCategory = document.createElement('span');
      spanCategory.textContent = category;
      spanCategory.classList.add('category');
      li.appendChild(spanCategory);

      let spanamount = document.createElement('span');
      spanamount.textContent = '$' + amount;
      spanamount.classList.add('amount');
      li.appendChild(spanamount);

      let spanDesc = document.createElement('span');
      spanDesc.textContent = desc;
      spanDesc.classList.add('desc');
      li.appendChild(spanDesc);

      let spanpayment = document.createElement('span');
      spanpayment.textContent = payment;
      spanpayment.classList.add('payment');
      li.appendChild(spanpayment);


      // Emptying the input fields
      let inputFields = document.querySelectorAll('input');
      inputFields.forEach((input) => {
        input.value = '';
      });
    } else {
      alert('Please add something');
    }

    let td2 = document.getElementById('td2');
    td2.textContent = amount;

    let result=budget-amount
    let td3 = document.getElementById('td3')

    td3.textContent = result;

  }