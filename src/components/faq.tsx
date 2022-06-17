import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface IFAQProps {
    onClose: () => void; 
}

interface IFAQContent {
    question: string;
    answer: string;
}

const faqs: IFAQContent[] = [
    {
        question: "Why did I create this?",
        answer: "I was sick and tired of APY, APR, SHIT COINS, NFTS, and crypto not being fun anymore. It became the monster that it wanted to kill. So I made just this simple contract so at least I can tip and lose my money with the hope it will help someone who needs it. And to play around with solidity and web3."
    },
    {
        question: "Is there any rule on how much someone can tip or take?",
        answer: "You can tip millions, billions, even trillions. There is no limit. If you want to borrow, limit is calculated by the golden ratio. This means if there is 1 ETH inside the contract only 0.382 ETH can be taken, but it doesn't forbid a human ( or a bot ) to call the function multiple times."
    },
    {
        question: "Will there be multiple versions of this contract?",
        answer: "Yes, the second version will use the greed score and the golden ratio to determine the borrowing limit. After that, we will see. ",
    },
    {
        question: "Where can I follow project updates?",
        answer: "This is part of the PlanB Project, a DAO for developing DeFi products and infrastructure for the average Ape :)",
    }
]

export const FAQ: React.FC<IFAQProps> = 
    ({ onClose }) => {

    return (
        <div className='relative px-10'>
            <div className='flex px-4 py-8'>
                <div className='w-3/4'>
                    <h3 className='text-[40px]'>FAQ</h3>
                </div>
                <div className='absolute top-3 right-5'>
                    <button onClick={() => onClose()}><FontAwesomeIcon icon={faClose} size="2x"/></button>
                </div>
            </div>
            <div>
                {faqs.map((faq, i) => (
                    <div className='py-4' key={i}>
                        <div className='py-2 text-[24px]'>
                            <h4>{faq.question}</h4>
                        </div>
                        <div className='text-[14px]'>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}