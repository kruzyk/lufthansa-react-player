import React from "react"
import ReactDOM from "react-dom"

interface UserProfile {
    imie: string;
    pet: string;
    color: string;
}
const user: UserProfile = { imie: "Bob", pet: 'żyrafę', color: 'blue' }
const user2: UserProfile = { imie: "Alice", pet: 'kota', color: 'red' }

interface UserComment {
    id: string;
    body: string;
}

const exampleComments: UserComment[] = [
    { id: "123", body: 'Love żyrafę' },
    { id: "234", body: 'Super Bob!' },
    { id: "345", body: 'I dont like blue' },
]

interface Props {
    user: UserProfile;
    admin?: boolean;
    comments?: UserComment[];
    children?: React.ReactNode;
}

const UserCard = (props: Props) => <div>
    <div id="user-card" className="m-4 card" style={
        { color: '#000', border: '1px solid', borderColor: props.user.color }
    }>
        <div className="card-body">
            <h3>{props.user.imie}</h3>
            <p>{'Ma : ' + user.pet}</p>
        </div>
        <div className="list-group list-group-flush">
            {props.comments && props.comments.map((item, index) => <div className="list-group-item" key={item.id}>{item.body}</div>)}
        </div>
        {props.children}
    </div>
</div>


ReactDOM.render(<div>
    {/* {UserCard({ user: user, admin: true })}
    {UserCard({ user: user2 })} */}
    <UserCard user={user2} admin={false}></UserCard>
    <UserCard user={user} comments={exampleComments}>
        <AddCommentForm />
    </UserCard>
</div>, document.getElementById('root'))


function AddCommentForm() {
    return <div className="p-4">
        Add Comment <input type="text" />
    </div>;
}


  // const vdiv2 = React.createElement('div', {
  //   id: 'user-card',
  //   className: 'm-4 card',
  //   style: { color: '#000', border: '1px solid', borderColor: user.color }
  // },
  //   React.createElement('div', { className: 'card-body' },
  //     React.createElement('h3', null, user.imie),
  //     React.createElement('p', null, user.imie + ' ma  ' + user.pet + ' '),
  //     React.createElement('div', { className: "list-group list-group-flush" },
  //       comments.map((item, index) => {
  //         return React.createElement('div', { className: 'list-group-item', key: item.id }, item.text)
  //       })
  //       // React.createElement('div', { className: 'list-group-item' }, 'Test'),
  //       // React.createElement('div', { className: 'list-group-item' }, 'Test'),
  //       // React.createElement('div', { className: 'list-group-item' }, 'Test')
  //     ),
  //     React.createElement('input', { placeholder: 'Dodaj komentarz' }))
  // )
  // // ReactDOM.render(vdiv2, document.getElementById('root'))
