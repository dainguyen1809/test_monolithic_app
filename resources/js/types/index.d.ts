export interface IUser {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface IPizza {
    id: number;
    user_id: number;
    chef: string;
    size: string;
    crust: string;
    toppings: string[];
    status: string;
    last_updated: string;
}

export interface ITableProps {
    items: Array<Record<string, any>>;
    columns: string[];
    primary: string | React.ReactNode;
    action: string;
}

export type TPageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: IUser;
    };
    pizzas: Array<Record<string, any>>;
};
