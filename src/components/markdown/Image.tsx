
function Image(props: any) {

    console.log(props);

    const {alt, src, width} = props;

    return (
        <img alt={alt} src={src} style={{width: width ? width : "100%"}}/>
    );
}

export default Image;