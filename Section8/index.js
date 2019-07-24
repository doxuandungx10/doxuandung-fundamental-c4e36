const context = {
    users: null,
}

window.onload = async() => {
    await getUsers();
    renderUsers();
    viewUsers();
}

const getUsers = async() => {
    const res = await fetch('https://reqres.in/api/users')
    const users = await res.json();
    context.users = users.data;
}


const renderUsers = () => {
        // console.log(context.users)
        // console.log(context.users[0].email)


        let info = document.getElementById(`info`);

        for (let i = 0; i < 3; i++) {
            let in4 = `
        <div id="user-${i}">
            <img src ="${context.users[i].avatar}">
            <b>Fullname: <b/> ${context.users[i].first_name} ${context.users[i].last_name}
            <b>Email: <b/> ${context.users[i].email}
        <div/>
        `
            info.innerHTML += in4
        }
    }
    // const viewUsers = () => {
    //     let info2 = document.getElementById(`info2`)
    //     for (let i = 0; i < 3; i++) {
    //         let div2 = document.getElementById(`user-${i}`);
    //         div2.addEventListener('click', () => {
    //             info2.innerHTML += div2
    //                 // console.log(context.users[i])
    //         })
    //     }
    // }





const viewUsers = () => {
    for (let i = 0; i < context.users.length; i++) {
        let user = document.getElementById(`user-${i}`);
        let userDetail = document.getElementById(`user-detail`);
        user.addEventListener('click', (event) => {
            console.log(event)
            userDetail.innerHTML = '';
            userDetail.innerHTML += user.innerHTML;
        })
    }


}