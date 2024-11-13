export function Upload({ setFile }) {
    const FileUpload = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    return (
        <>
            <label for="file-upload" class="custom">
                Загрузите файл
            </label>
            <input id="file-upload" type="file" onChange={FileUpload} />
        </>
    );
}