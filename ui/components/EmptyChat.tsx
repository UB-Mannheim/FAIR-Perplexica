import EmptyChatMessageInput from './EmptyChatMessageInput';

const EmptyChat = ({
  sendMessage,
  focusMode,
  setFocusMode,
}: {
  sendMessage: (message: string) => void;
  focusMode: string;
  setFocusMode: (mode: string) => void;
}) => {
  const templateQuestions = [
    "What is RDM?",
    "Where do I find the DFG DMP template?",
    "What are the FAIR principles?",
    "List some data availability statements",
    "How do I include RDM in a research project proposal?",
    "How do I cite a dataset?",
    "What are best practices for choosing a file format?"
  ];

  const handleQuestionClick = (question: string) => {
    sendMessage(question);
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-sm mx-auto p-2 space-y-4">
        
        <h2 className="text-black/70 dark:text-white/70 text-3xl font-medium -mt-8">
          FAIR-Perplexica: Search for RDM topics
        </h2>

        <EmptyChatMessageInput
          sendMessage={sendMessage}
          focusMode={focusMode}
          setFocusMode={setFocusMode}
        />

        <div className="space-y-2">
          {templateQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question)}
              className="text-center text-black/70 dark:text-white/70 text-base font-normal p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmptyChat;
