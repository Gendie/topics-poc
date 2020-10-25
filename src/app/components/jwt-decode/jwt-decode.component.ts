import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
    selector: 'app-jwt-decode',
    templateUrl: './jwt-decode.component.html'
})
export class JwtDecodeComponent {

    public token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjgxNmY5MWM0LThlNzMtNDQwOS04N2NmLTE3YjBmNzJlY2JjZCIsImlhdCI6MTYwMzM3OTI5MiwiZXhwIjoxNjAzMzgyODkzfQ.ic0ONpdiYA3WehJz6YLc4glf6vJuiJvNfbKvW5X7zoQ";
    public decoded = jwt_decode(this.token);

}
