import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:Array<User>=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.users = res
    },
    (err)=>console.log('erro' ,err.status),)
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(res=>{
      console.log('User excluído')
    },
    (err)=>console.log('erro' ,err.status),
    ()=>{this.getUsers()}
    )
  }

}
