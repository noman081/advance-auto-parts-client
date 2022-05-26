import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="text-gray-700">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what
                            can do for you.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Is this the right time to buy?
                                </summary>

                                <span>
                                    A customer can be completely ready to buy and yet still feel that it's not the right time.  She may believe that holding out will result in a discount, or that another product will come along that makes your current offering obsolete. It's this last question, and its potential to block a sale, that causes companies to offer "limited time offers."
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    Does the price and value meet my expectations?
                                </summary>

                                <span>
                                    The customer has recognized the need, but is assessing whether or not what you're selling is affordable–and, if affordable, worth the money.  This entails weighing that need against the panoply of other demands that are vying for attention and money.  The customer may want (or have) competitive information that puts the price of your offering into context.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Do I want and need what this person is selling?
                                </summary>

                                <span>
                                    Through the conversation with the customer, you will discover needs (and requirements) that match your offering.  The biggest mistake at this stage is being too pushy. Remember the truism: "Customers like buying things, but hate to be sold things." Finding out that the customer does not need what you've got is just as big a victory as discovering the need.
                                </span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Do I want to do business with the firm?
                                </summary>

                                <span className="px-4 py-2">
                                    If the customer is familiar with your firm, then you've either got a good reputation (in which case you've got a leg up), a bad reputation (you've got to start with damage control) or a mediocre reputation–in which case, you're back to positioning your firm to your advantage.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Do I want to do business with this person?
                                </summary>

                                <span className="px-4 py-2">
                                    Within two seconds after you meet a customer, that customer has probably decided whether he is willing to buy from you. That's why first impressions, your appearance and your initial greeting are so important.  Sometimes you have no control over the answer to this question, because the customer may have arbitrary rules that run to your disadvantage. (For example, I once didn't buy a suit because the sales clerk reminded me of my ex-wife's boyfriend.  Not his fault, but there you are.) Still: Make sure you're controlling as many variables as you can.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Do I want to do business with this person?
                                </summary>

                                <span className="px-4 py-2">
                                    Within two seconds after you meet a customer, that customer has probably decided whether he is willing to buy from you. That's why first impressions, your appearance and your initial greeting are so important.  Sometimes you have no control over the answer to this question, because the customer may have arbitrary rules that run to your disadvantage. (For example, I once didn't buy a suit because the sales clerk reminded me of my ex-wife's boyfriend.  Not his fault, but there you are.) Still: Make sure you're controlling as many variables as you can.
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;