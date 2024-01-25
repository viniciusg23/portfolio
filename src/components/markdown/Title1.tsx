
function Title1(props: any) {

    return (
        <h1 style={{
            marginTop: 8,
            // marginBottom: 16,
            lineHeight: 1.25,
            paddingBottom: 2,
            fontWeight: 500,
            borderBottom: '1px solid rgb(240, 240, 240)'
        }}>
            {props.children}
        </h1>
    )
}

export default Title1;