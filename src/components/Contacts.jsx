
const Contacts = () => {
    return (
        <div id="contacts-section" className="flex flex-col flex-auto text-center gap-2 pb-5">
            <h1 className='text-3xl self-center pb-2 italic font-semibold'>Контакти</h1>
            <form>
                <h2 className="text-2xl pb-2">Свържи се с мен</h2>
                <h3 className="text-md font-bold font-montserrat pb-2">Изпрати своето запитване. Ще се свържа с теб възможно най-скоро!</h3>
                <div className="grid grid-cols-2">
                    <section className="grid grid-cols-1 gap-2 justify-items-center">
                        <input className="bg-slate-200" />
                        <label>First name</label>
                        <input className="bg-slate-200" />
                        <label>Last name</label>
                    </section>
                    <section className="grid grid-cols-1 gap-2 justify-items-center">
                        <input className="bg-slate-200" />
                        <label>Email</label>
                        <input className="bg-slate-200" />
                        <label>Phone number</label>
                    </section>
                </div>
            </form>
        </div>
    );
};

export default Contacts;
