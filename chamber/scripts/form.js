// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);


const fname = myInfo.get('fname');
const lname = myInfo.get('lname');
const organizationTitle = myInfo.get('organization-title');
const email = myInfo.get('email');
const phoneNumber = myInfo.get('phone-number');
const organizationName = myInfo.get('organization-name');
const membership = myInfo.get('membership');

console.log(membership)

document.querySelector('#results').innerHTML = `
<h2>Membership</h2>
<p>Name: ${fname} ${lname}</p>
<p>Title: ${organizationTitle}</p>
<p>Email: ${email}</p>
<p>Mobile: ${phoneNumber}</p>
<p>Business: ${organizationName}</p>
<p>Membership: ${membership.charAt(0).toUpperCase() + membership.slice(1)}</p>
`