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
        question: "Why did i create this ?",
        answer: "I was sick and tired of APY, APR, SHIT COINS, NFTS and crypto not beeing fun anymore, it become the monster that it wanted to kill. So i made just this simple contract so at leat i can tip and lose my money with a hope it will help someone who needs it. And to play around with solidity and web3."
    },
    {
        question: "Don't you think some bad actors will just take money ?",
        answer: "They could, but again, why would you? You didn't hack it, you would not get the same feeling as breaking a smart contract or robbing a exchange or a bank, lol. It would become boring real quick and not fun."
    },
    {
        question: "Is there any rule how much can someone tip or take ?",
        answer: "You can tip millions, billion, even trillions, there is no limit. To take out there is a limit that is calculated by using the golden ration. Meaning, if there is 1 ETH inside the contract only 0.382 ETH can be taken, but it doesn't forbid an human ( or a bot ) to call the function multiple time and to take all the ETH."
    },
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