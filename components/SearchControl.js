import { Layout, Input, ButtonRounded } from ".";

export default function SearchControl({ text, setText, onPress }) {

    return (
        <>
            <Input
                label="Buscar"
                value={text}
                onChangeText={setText}
            />
            <ButtonRounded title="Buscar" onPress={onPress} />
        </>
    );
}