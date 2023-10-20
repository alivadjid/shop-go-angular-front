# AngularAdmin

cheatsheet

```
ng g c nav
ng g c menu

ng g m public
ng g m secure
ng g c secure
ng g c public
ng g c public/login
ng g c public/register
```

submit forms:

1. Regular forms
2. Reactive forms

on Register using submit with reqular forms in register form
bind values from component -> ngModel

```
ng generate environments
```

Reactive forms in login

Services. How to use services. Login and Register functions go in auth service

```
ng g s services/auth
```

Authenticated user

interfaces

```
ng g i interfaces/user
ng g i interfaces/role
```

Logout

Inputs like props

Interceptors

```
ng g interceptor interceptors/credentials
```

include withCredentials interceptord

Profile

```
ng g c secure/profile
ng g c secure/dashboard
```

update profile information and password
