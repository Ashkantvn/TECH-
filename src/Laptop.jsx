import SmartPhoneCard from "./SmartPhonecard";

const Laptop = ()=>{
    return (
        <>
            <h1 className="devices-h1">Laptop</h1>
            <div className="devices  d-flex flex-wrap justify-content-center">
                <div className="mx-2 d-flex flex-wrap justify-content-start">
                    <SmartPhoneCard name='oE' cpu='m84' ram="21 GB" rom="49 GB" battery='1637 mA' date="15/01/2022" rate="4.2" color="black / blue" />
                    <SmartPhoneCard name='XV' cpu='m169' ram="4 GB" rom="146 GB" battery='1319 mA' date="17/03/2022" rate="4.4" color="black / blue" />
                    <SmartPhoneCard name='Zn' cpu='m25' ram="43 GB" rom="132 GB" battery='1353 mA' date="02/02/2022" rate="3.9" color="black / blue" />
                    <SmartPhoneCard name='XV' cpu='m169' ram="4 GB" rom="146 GB" battery='1319 mA' date="17/03/2022" rate="4.4" color="black / blue" />
                    <SmartPhoneCard name='Zn' cpu='m25' ram="43 GB" rom="132 GB" battery='1353 mA' date="02/02/2022" rate="3.9" color="black / blue" />
                    <SmartPhoneCard name='oE' cpu='m84' ram="21 GB" rom="49 GB" battery='1637 mA' date="15/01/2022" rate="4.2" color="black / blue" />
                    <SmartPhoneCard name='XV' cpu='m169' ram="4 GB" rom="146 GB" battery='1319 mA' date="17/03/2022" rate="4.4" color="black / blue" />
                    <SmartPhoneCard name='Zn' cpu='m25' ram="43 GB" rom="132 GB" battery='1353 mA' date="02/02/2022" rate="3.9" color="black / blue" />
                    <SmartPhoneCard name='XV' cpu='m169' ram="4 GB" rom="146 GB" battery='1319 mA' date="17/03/2022" rate="4.4" color="black / blue" />
                    <SmartPhoneCard name='Sl' cpu='m319' ram="113 GB" rom="105 GB" battery='1331 mA' date="22/11/2022" rate="3.8" color="black / blue" />
                </div>
                
            </div>
        </>
    )
}
export default Laptop;