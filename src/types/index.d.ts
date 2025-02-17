declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    // firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    recipes: RecipeProps[];
  };

declare interface getUserInfoProps {
    userId: string;
  }

declare interface RightSidebarProps {
    user: User;
    transactions: Transaction[];
    banks: Bank[] & Account[];
}
  
declare interface RecipeSideBarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}
  
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

declare interface RecipeProps {
  type: "saved" | "recipes";
  id?: string;
  user?: User;
  recipe: Array<{
    id?: string;
    title: string;
    time: number;
    type_time:string;
    description: string;
    status: string;
    category?: string;
    preparationMethod: string;
    ingredients?: Array<{
      name: string;
      amount: string;
    }>;
  }>;
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
  email: string;
  password: string;
};

declare interface FooterProps {
  user?: User;
  type?: 'mobile' | 'desktop'
}

declare interface RecipeTabItemProps {
  id?: string;
  recipe: RecipeProps[
    {
      category: string;
    }
  ];
}

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare interface InputCreateRecipeForm {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "textarea";
  className?: string;
}