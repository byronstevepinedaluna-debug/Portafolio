import { useState, useEffect, useRef, useCallback } from 'react';
import { FiLock, FiX, FiEye, FiEyeOff, FiDownload, FiAlertCircle, FiCheckCircle, FiLoader } from 'react-icons/fi';

const CvDownloadModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef(null);

  const handleClose = useCallback(() => {
    if (isLoading) return;
    setPassword('');
    setError(null);
    setIsSuccess(false);
    setIsLoading(false);
    setShowPassword(false);
    onClose();
  }, [isLoading, onClose]);

  // Enfocar el input al abrir el modal
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !isLoading) {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, isLoading, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/cv/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password.trim() }),
      });

      if (!response.ok) {
        let errorMessage = 'Error al verificar la contraseña.';
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // Si no es JSON, mensaje genérico según código
          if (response.status === 401) errorMessage = 'Contraseña incorrecta.';
          if (response.status === 429) errorMessage = 'Demasiados intentos. Intenta más tarde.';
        }
        setError(errorMessage);
        setIsLoading(false);
        return;
      }

      // Respuesta exitosa: descargar el archivo PDF
      setIsSuccess(true);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'ByronPineda_CV.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);

      // Cerrar modal automáticamente tras breve confirmación
      setTimeout(() => {
        handleClose();
      }, 1200);
    } catch {
      setError('Error de conexión con el servidor. Intenta de nuevo.');
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isLoading) {
          handleClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-md bg-white dark:bg-portfolio-surface border border-[#F0DEE3] dark:border-[#2D2034] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 transition-all">
        
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          disabled={isLoading}
          className="absolute top-4 right-4 p-2 rounded-xl text-[#7E6982] hover:text-[#1A111E] dark:hover:text-slate-200 hover:bg-primary/10 dark:hover:bg-portfolio-surface/60 transition-colors disabled:opacity-50 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Encabezado con Icono */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/20 via-rose-500/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary mb-4 shadow-inner">
            <FiLock className="w-7 h-7" />
          </div>
          <h3 id="modal-title" className="text-xl font-bold text-[#1A111E] dark:text-portfolio-text">
            Acceso Protegido
          </h3>
          <p className="mt-2 text-sm text-[#6B556E] dark:text-slate-400 leading-relaxed">
            Ingresa la contraseña autorizada para descargar el Currículum Vitae.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B556E] dark:text-slate-400 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                disabled={isLoading || isSuccess}
                placeholder="Ingresa la contraseña..."
                className="w-full px-4 py-3 pr-12 rounded-xl border border-[#EBD6DC] dark:border-portfolio-surface/80 bg-[#FAF5F6] dark:bg-stone-900/60 text-[#1A111E] dark:text-slate-100 placeholder-[#9C859E] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading || isSuccess}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#7E6982] hover:text-[#1A111E] dark:hover:text-slate-200 rounded-lg transition-colors cursor-pointer"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
              >
                {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-top-1">
              <FiAlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="leading-snug">{error}</span>
            </div>
          )}

          {/* Mensaje de éxito */}
          {isSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2.5 animate-in fade-in">
              <FiCheckCircle className="w-4 h-4 shrink-0" />
              <span>¡Contraseña correcta! Iniciando descarga...</span>
            </div>
          )}

          {/* Acciones */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="w-full sm:w-1/2 px-4 py-3 rounded-xl border border-[#EAD6DC] dark:border-stone-700 text-[#5A455E] dark:text-slate-300 font-semibold text-sm hover:bg-[#FAF5F6] dark:hover:bg-stone-800 transition-colors disabled:opacity-50 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading || !password.trim() || isSuccess}
              className="w-full sm:w-1/2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold text-sm shadow-md shadow-primary/25 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <FiLoader className="w-4 h-4 animate-spin" />
                  <span>Validando...</span>
                </>
              ) : isSuccess ? (
                <>
                  <FiCheckCircle className="w-4 h-4" />
                  <span>Descargando...</span>
                </>
              ) : (
                <>
                  <FiDownload className="w-4 h-4" />
                  <span>Descargar</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CvDownloadModal;
