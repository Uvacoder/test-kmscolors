export const useColorCopied = () => {
    return new ColorCopyIndicator();
}

class ColorCopyIndicator {
    public isShown = useState<boolean>("colorCopied", () => false);

    public toggle() {
        this.isShown.value = !this.isShown.value;
    }
}