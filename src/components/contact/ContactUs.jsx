import React from 'react';

const Inputs = [
    { id: 1, label: "Name", placeholder: "Entrer your name", type: "text" },
    { id: 2, label: "Email", placeholder: "Your email", type: "email" },
];

const ContactUs = () => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section >
            <div className="container pt-16 pb-24 max-w-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-averia text-gray-900">
                        Contact Us
                    </h2>
                    <p className="text-gray-400 mt-3 max-w-md mx-auto">
                        We'd love to hear from you. Please fill out the from below and we'll get back to you as soon as possible
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-5"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {Inputs.map((input) => (
                            <div key={input.id} className="flex flex-col">
                                <label htmlFor={`input-${input.id}`} className="mb-2 text-sm font-semibold text-gray-700">
                                    {input.label}
                                </label>
                                <input
                                    id={`input-${input.id}`}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    required
                                    className="h-11 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 text-sm font-semibold text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Écrivez votre message ici..."
                            required
                            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                        />
                    </div>

               

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-green-500 text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        {submitted ? "Message envoyé !" : "Envoyer le message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
