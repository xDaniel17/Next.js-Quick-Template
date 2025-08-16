
const Footer: React.FC = () => (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-100 py-4 px-2 text-center fixed bottom-0 left-0 z-50 shadow-lg border-t border-gray-800 dark:border-gray-700">
        <span className="block text-sm">&copy; {new Date().getFullYear()} Dev by DH</span>
    </footer>
);

export default Footer;
