const voters = [
    {name: "John Doe", isRegistered: true},
    {name: "Nick Fury", isRegistered: false},
    {name: "Steve Rogers", isRegistered: true},
    {name: "Tony Stark", isRegistered: false},
    {name: "Stephen Strange", isRegistered: false}
]
const RegisteredVoters = voters.filter(voters =>{
    return voters.isRegistered}
).map(voters =>{
    return voters.name})
;

const NonRegisteredVoters = voters.filter(voters =>{
    return !voters.isRegistered}
).map(voters =>{
    return voters.name})
;

function print_list(list){
    let numbering = "";
    for(let x=0;x<list.length;x++)
        numbering += (x + 1) + ".) " + list[x] + "\n";
    return numbering;
}

console.log("Non Registered Voters:" );
console.log(print_list(NonRegisteredVoters));
console.log("Registered Voters:" );
console.log(print_list(RegisteredVoters));


