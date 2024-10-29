declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    recipes: Recipe[];
  };
  
declare interface MobileNavProps {
  user: User;
}
  
declare interface SiderbarProps {
  user: User;
}



declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare type Recipe = {
  id: string;
  title: string;
    authorRecipe: string;
  };
  
declare interface signInProps {
    email: string;
    password: string;
}

declare type SignUpParams = {
  firstName?: string;
  lastName?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  dateOfBirth?: string;
  cpf?: string;
  name: string;
  email: string;
  password: string;
};
