import { TesteNovo } from "../index";
import { Container } from "../styles";

export default {
    component: TesteNovo,
    title: 'TesteNovo',
};

export const Default = () => {
    return(
        <TesteNovo />
    )    
};

export const Pinned = () => <TesteNovo />;

export const Archived = () => (<Container />);