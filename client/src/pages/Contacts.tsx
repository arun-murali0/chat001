import { Wrapper } from '../global/Container';
import { ContactContainer } from '../components/contacts';

export default function Contacts() {
	return (
		<Wrapper>
			<div className="sm:w-full h-screen p-5 md:w-[150px] xl:w-[300px] shadow-xl border-r-borderColor transition-all">
				<div>
          <ContactContainer/>
        </div>
			</div>
		</Wrapper>
	);
}
