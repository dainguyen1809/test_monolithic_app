import { IPizza, TPageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UpdatePizzaOrderForm from "./Partials/UpdateOrderPizzaForm";

export default function Edit({ auth, pizzas }: TPageProps<{ pizzas: IPizza }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {"Order #" + pizzas.id}
                </h2>
            }
        >
            <Head title={"Order #" + pizzas.id} />

            <div className="py-12">
                <div className="max-w-screen mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="m-12">
                            <a
                                href={route("pizzas.index")}
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                Back
                            </a>
                        </div>
                        <UpdatePizzaOrderForm
                            pizza={pizzas}
                            className="max-w-md"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
