import React, {useState} from 'react';
import {Flex} from "../../styles";
import {useNavigate} from "react-router-dom";
import information from '../../svg/ok.svg'
import {useForm} from "react-hook-form";
import {
    CartInfo,
    CartNumber,
    Container,
    CVC, ImgCredit, ImgMir,
    Month,
    Paid,
    Pay,
    PaymentContainer,
    PaymentTitle,
    SpanCVC, SpanMonth, SpanNumber
} from "./PaymentStyle";


export const Payment = () => {
    const [isPayed, setIsPayed] = useState(false);
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [cvc, setCvc] = useState("");
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = () => {
        setIsPayed(true)
        setTimeout(() => {
            navigate("/")
            setIsPayed(false)
        }, 2000)
    };

    const regexNumber = /^[0-9 ]+$/
    const regexMonth = /^[0-9/]+$/

    return (
        <>
            <Container $justify='center' $direction='column' $align='center'>
                {isPayed ?
                    <Paid $align='center' $padding='10px' $justify='center' $direction='column'>
                        <img src={information} alt="information"/>
                        <Flex $margin='15px'>Заказ оплачен</Flex>
                    </Paid>
                    :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <PaymentTitle> Оплатить</PaymentTitle>

                        <PaymentContainer $justify='space-evenly' $padding='10px' $align='center' $direction='column'>
                            <ImgCredit></ImgCredit>
                            <ImgMir></ImgMir>
                            <Flex $direction='column' $align='center'>
                                <SpanNumber>  {errors?.cartNumber && <>{errors?.cartNumber?.message || "Error"}</>}</SpanNumber>

                                <CartNumber placeholder="_ _ _ _ _ _ _ _ _ _ "
                                            value={cardNumber
                                                .replace(/\s/g, "")
                                                .replace(/(\d{4})/g, "$1 ")
                                                .trim()}

                                            {...register('cartNumber', {
                                                required: "пустое поле",
                                                pattern: {
                                                    value: regexNumber,
                                                    message: "допустимы только цифры "
                                                }, minLength: {
                                                    value: 16,
                                                    message: 'минимум 16 цифр'
                                                },
                                            })}
                                            maxLength={19}
                                            onChange={(e) => setCardNumber(e.target.value)}
                                />

                                <CartInfo $margin="10px">
                                    <Flex $direction='column'>
                                        <Month value={date
                                            .replace(/(\d{2})(\d{2})/, "$1/")
                                            .trim()
                                        }   {...register('month', {
                                            required: "пустое поле", pattern: {
                                                value: regexMonth,
                                                message: "допустимы только цифры"
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'минимум 4 цифры'
                                            },
                                        })}
                                               maxLength={5}
                                               placeholder='MM/YY'
                                               onChange={(e) => setDate(e.target.value)}
                                        />
                                        <SpanMonth>  {errors?.month && <>{errors?.month?.message || "Error"}</>}</SpanMonth>
                                    </Flex>

                                    <Flex $direction='column'>
                                        <CVC value={cvc}
                                             {...register('cvc', {
                                                 required: "пустое поле", pattern: {
                                                     value: regexNumber,
                                                     message: "допустимы только цифры"
                                                 },
                                                 maxLength: {
                                                     value: 3,
                                                     message: "Необходимо 3 символа"
                                                 },
                                             })} placeholder="***"
                                             maxLength={3}
                                             onChange={(e) => setCvc(e.target.value)}/>
                                        <SpanCVC>  {errors?.cvc && <>{errors?.cvc?.message || "Error"}</>}</SpanCVC>
                                    </Flex>

                                </CartInfo>
                            </Flex>
                        </PaymentContainer>
                        <Pay type="submit">Оплатить заказ</Pay>
                    </form>
                }
            </Container>

        </>
    );
};

